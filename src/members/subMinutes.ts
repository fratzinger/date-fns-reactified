import { subMinutes as _subMinutes } from "date-fns";
import { reactify } from "@vueuse/shared";

export const subMinutes = reactify(_subMinutes);