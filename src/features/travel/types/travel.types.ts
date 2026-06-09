export interface Travel {
  idTravel: string;
  vehiclePlate: string;
  vehicle: string;
  vehicleId: string;
  destinationId: string;
  destination: string;
  startedMileage?: number;
  finishedMileage?: number;
  autonomy?: number;
  start?: string;
  end?: string;
}
