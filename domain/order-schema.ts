import { Static, Type } from '@sinclair/typebox';

export const orderSchema = Type.Object({
  deliveryAddress: Type.String(),
  paymentTermsInDays: Type.Number(),
  countryId: Type.Number(),
  productId: Type.Integer(),
  userId: Type.Integer(),
  orderCode: Type.String()
});

export type addOrderDTO = Static<typeof orderSchema>;
