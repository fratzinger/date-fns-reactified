import _add from "date-fns/add";
import { reactify } from "@vueuse/core";

export const add = reactify(_add);