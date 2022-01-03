import { isAfter as _isAfter } from "date-fns";
import { reactify } from "@vueuse/shared";

export const isAfter = reactify(_isAfter);