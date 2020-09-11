export interface UserCar {
    userId: string;
    carId: string;
    // omistussuhde
    ownershipRelation: 'owner' | 'leasing'
  }
  