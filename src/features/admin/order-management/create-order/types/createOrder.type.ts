export type CreateOrderType = {
    id: number;
    number: string,
    customer: {
      id: number,
      name: string,
    },
    pickupAddress: string;
    pickupDateTime: string;
    deliveryAddress: string;
    deliveryDateTime: string;
    package: {
      id: number,
      type: string,
    },
    quantity: number;
    weightVolume: number;
    specialInstructions: string;
    vehicle: {
      id: number,
      type: string,
    },
    driver: {
      id: number,
      name: string,      
    },
    payment: {
      id: number,
      method: string,
    }
  }