import { createRoot } from "react-dom/client";
import { QueryClient, QueryClientProvider } from "react-query";

import App from "./App";
import GlobalStyle from "./styles/globalstyle";

const container = document.getElementById("root");
const root = createRoot(container as Element);
const queryClient = new QueryClient();

root.render(
  <>
    <QueryClientProvider client={queryClient}>
      <GlobalStyle />
      <App />
    </QueryClientProvider>
  </>,
);
