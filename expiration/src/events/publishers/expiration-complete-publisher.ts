import {
  Subjects,
  Publisher,
  ExpirationCompleteEvent,
} from '@msfptickets/common';

export class ExpirationCompletePublisher extends Publisher<
  ExpirationCompleteEvent
> {
  subject: Subjects.ExpirationComplete = Subjects.ExpirationComplete;
}
