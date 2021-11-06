import { isAfter as _isAfter } from "date-fns";
import { reactify } from "@vueuse/core";

export const isAfter = reactify(_isAfter);