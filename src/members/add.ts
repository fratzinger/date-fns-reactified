import _add from "date-fns/add";
import { reactify } from "@vueuse/shared";

export const add = reactify(_add);