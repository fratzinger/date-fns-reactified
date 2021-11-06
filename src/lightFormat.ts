import { lightFormat as _lightFormat } from "date-fns";
import { reactify } from "@vueuse/core";

export const lightFormat = reactify(_lightFormat);