import Controller from '@ember/controller';
import { DateTime } from 'luxon';
import faker from 'faker';

export default class extends Controller {
  get fakerData() {
    return faker.name.firstName();
  }

  get luxonFormattedDate() {
    return DateTime.now().toISO();
  }
}
