import { eachQuarterOfInterval as _eachQuarterOfInterval } from "date-fns";
import { reactify } from "@vueuse/core";

export const eachQuarterOfInterval = reactify(_eachQuarterOfInterval);