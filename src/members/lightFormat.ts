import { lightFormat as _lightFormat } from "date-fns";
import { reactify } from "@vueuse/shared";

export const lightFormat = reactify(_lightFormat);