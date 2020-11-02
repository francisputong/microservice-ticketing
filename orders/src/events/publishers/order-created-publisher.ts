import { Publisher, OrderCreatedEvent, Subjects } from '@msfptickets/common';

export class OrderCreatedPublisher extends Publisher<OrderCreatedEvent> {
  subject: Subjects.OrderCreated = Subjects.OrderCreated;
}
