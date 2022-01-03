import { isBefore as _isBefore } from "date-fns";
import { reactify } from "@vueuse/shared";

export const isBefore = reactify(_isBefore);