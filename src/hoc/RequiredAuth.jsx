import { useLoginStatus } from "../hooks/useLoginStatus";
import { ErrorComponent } from "../components/Error/ErrorComponent";
export const RequireAuth = ({ children, role }) => {
  const { isLogged } = useLoginStatus(role);
  if (!isLogged) {
    // return <ErrorComponent />;
    return <></>;
  } else return children;
};
