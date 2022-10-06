import { ReactNode } from "react";
import { LinearProgress } from "@/modules/core/presenters/components/atoms";

interface ILoadingContent {
  children: ReactNode | ReactNode[];
  loading: boolean;
}

export const LoadingContent: React.FC<ILoadingContent> = ({
  children,
  loading,
}) => <div>{loading ? <LinearProgress /> : children}</div>;
