export interface Travel {
  idTravel: string;
  vehiclePlate: string;
  vehicleId: string;
  vehicle: string;
  destinationId: string;
  destination: string;
  startedMileage?: number;
  finishedMileage?: number;
  autonomy?: number;
  start?: string;
  end?: string;
}
