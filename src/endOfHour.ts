import { endOfHour as _endOfHour } from "date-fns";
import { reactify } from "@vueuse/core";

export const endOfHour = reactify(_endOfHour);