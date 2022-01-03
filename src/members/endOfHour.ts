import { endOfHour as _endOfHour } from "date-fns";
import { reactify } from "@vueuse/shared";

export const endOfHour = reactify(_endOfHour);