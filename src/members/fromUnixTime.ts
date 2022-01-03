import { fromUnixTime as _fromUnixTime } from "date-fns";
import { reactify } from "@vueuse/shared";

export const fromUnixTime = reactify(_fromUnixTime);