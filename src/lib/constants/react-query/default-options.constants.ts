const QUERY_CLIENT_DEFAULT_OPTIONS = {
  queries: {
    suspense: true,
    retry: 0,
    refetchOnWindowFocus: false,
    // refetchOnMount: true,
    refetchOnReconnect: true,
  },
};

export { QUERY_CLIENT_DEFAULT_OPTIONS };
