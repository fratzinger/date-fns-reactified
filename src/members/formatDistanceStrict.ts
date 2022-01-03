import { formatDistanceStrict as _formatDistanceStrict } from "date-fns";
import { reactify } from "@vueuse/shared";

export const formatDistanceStrict = reactify(_formatDistanceStrict);