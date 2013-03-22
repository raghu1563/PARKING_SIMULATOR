function Parkingcontroller($scope){
							$scope.twowheelers_slots=[];
							$scope.fourwheelers_slots=[];
							$scope.others_slots=[];
							$scope.slotsVisibility=false;
							$scope.visibility_parkin_info=false;
							$scope.visibility_parkout_info=false;
								function Vehicle(){
									this.status = null;
									this.location = null;
									this.inTime = null;
									this.outTime = null;
								}
							$scope.GenerateSlots=function(args,length,name,vehicle_Type){
								$scope.slotsVisibility=true;
								for(var temp=0;temp<length;temp++)
								{
									if(vehicle_Type=="twoWheeler")
									{
									$scope.cannotGenerateTwoWheelSlots=true;
									}
									if(vehicle_Type=="fourWheeler")
									{
									$scope.cannotGenerateFourWheelSlots=true;
									}
									if(vehicle_Type=="otherVehicles")
									{
									$scope.cannotGenerateOtherVehicleSlots=true;
									}
									var vehicleproperty = new Vehicle();
									vehicleproperty.status = false;
									vehicleproperty.location=name+(temp+1);
									args.push(vehicleproperty);
								}
							};
							$scope.ParkingVehicle=function(args,vehicle_Type){
								var temp;
									for(temp=0;temp<args.length;temp++)
										{
											if(!args[temp].status)
										{
										$scope.visibility_parkout_info=false;
										$scope.visibility_parkin_info=true;
										var dateobj=new Date();
										args[temp].inTime=dateobj.getHours()+":"+dateobj.getMinutes()+":"+dateobj.getSeconds();
										$scope.in_Time=args[temp].inTime;
										args[temp].status= true;
										args[temp].vehiclestat="Vehicle Parked";
										$scope.vehiclestatus=args[temp].vehiclestat;
										args[temp].vehiclenumber=$scope.vehicle_number;
										$scope.vehiclenumber=args[temp].vehiclenumber;
										$scope.vehicle_number="";
										$scope.slot_num=args[temp].location;
										var intime=$scope.in_Time.split(':');
										args[temp].inseconds=parseInt(intime[2],10)+(parseInt(intime[0],10)*3600)+(parseInt(intime[1],10)*60);
										
											if(vehicle_Type=="twoWheeler"){
										
												$scope.twowheelers_slots=args;
											}
											if(vehicle_Type=="fourWheeler")
											{
												$scope.fourwheelers_slots=args;
											}
											if(vehicle_Type=="otherVehicles")
											{
												$scope.others_slots=args;
											}
									
											break;
									}
								}
							if(temp==args.length){
							
								if(vehicle_Type=="twoWheeler")
									{
										$scope.disableTwoWheelParking=true;
										alert("Two-Wheeler parking is full....." );
									}
									if(vehicle_Type=="fourWheeler")
									{
										$scope.disableFourwheelParking=true;
										alert("Four-wheeler parking is full.....");	
									}
									 if(vehicle_Type=="otherVehicles")
									{
									$scope.disableOthersParking=true;
									alert("others parking is full.....");	
									}
							}
						};
							$scope.UnParkingVehicle=function(args,locationid,vehicle_Type){
								for(var temp=0;temp<args.length;temp++)
									{
										$scope.visibility_parkin_info=false;
										$scope.visibility_parkout_info=true;
										if(args[temp].location==locationid)
											{	
												
												var dtobj=new Date();
												args[temp].outTime=dtobj.getHours()+":"+dtobj.getMinutes()+":"+dtobj.getSeconds();
												$scope.out_Time=args[temp].outTime;
												$scope.in_Time=args[temp].inTime;
												args[temp].status= false;
												args[temp].vehiclestat="Vehicle Unparked"
												$scope.vehiclestatus=args[temp].vehiclestat;
												$scope.slot_num=args[temp].location;
												$scope.vehiclenumber=args[temp].vehiclenumber;
												var outtime=$scope.out_Time.split(':');
												args[temp].outseconds=parseInt(outtime[2],10)+(parseInt(outtime[0],10)*3600)+(parseInt(outtime[1],10)*60);
												$scope.total_second=Math.abs(args[temp].outseconds)-(args[temp].inseconds);
												if(vehicle_Type=="twoWheeler")
												{
												$scope.disableTwoWheelParking=false;
												}
												if(vehicle_Type=="fourWheeler")
												{
												$scope.disableFourwheelParking=false;
												}
												if(vehicle_Type=="otherVehicles")
												{
												$scope.disableOthersParking=false;
												}
										}
								}			
						};	
				}