import { fromUnixTime as _fromUnixTime } from "date-fns";
import { reactify } from "@vueuse/core";

export const fromUnixTime = reactify(_fromUnixTime);