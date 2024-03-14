import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';

@Schema()
export class UserSettings {
  @Prop()
  receivedNotifications?: boolean;

  @Prop()
  receivedEmails?: boolean;

  @Prop()
  receivedSMS?: boolean;
}

export const UserSettingsSchema = SchemaFactory.createForClass(UserSettings);
