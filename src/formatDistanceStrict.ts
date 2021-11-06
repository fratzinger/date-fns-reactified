import { formatDistanceStrict as _formatDistanceStrict } from "date-fns";
import { reactify } from "@vueuse/core";

export const formatDistanceStrict = reactify(_formatDistanceStrict);