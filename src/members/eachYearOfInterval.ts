import { eachYearOfInterval as _eachYearOfInterval } from "date-fns";
import { reactify } from "@vueuse/shared";

export const eachYearOfInterval = reactify(_eachYearOfInterval);