import useAsync from '../useAsync';

import * as toolApi from '../../services/toolApi';

export default function useToolData() {
  const {
    data: tools,
    loading: toolLoading,
    error: toolError,
    act: getTool,
  } = useAsync(() => toolApi.getToolInformation());

  return {
    tools,
    toolLoading,
    toolError,
    getTool,
  };
}