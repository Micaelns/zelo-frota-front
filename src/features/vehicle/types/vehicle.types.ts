import type { VehicleType } from "../../vehicleType/types/vehicleType.types";

export interface Vehicle {
  id: string;
  plate: string;
  vehicleType: VehicleType;
  mileage: number;
}
