import { useContext, useEffect, useState } from 'react';
import SearchContext from '../../contexts/SearchContext';
import ToolListContext from '../../contexts/ToolsListContext';

import useToolData from '../../hooks/api/useToolsData';
import Box from './Box';
import { BackArrow, NextArrow, Pagination, ToolsContent } from './style';

export default function ToolsCard() {
    const { searchInfo } = useContext(SearchContext);

    // const [toolsList, setToolsList] = useState([]);
    const { toolListInfo, setToolListInfo, handleChange } = useContext(ToolListContext)
    const { tools } = useToolData();

    const itemsPerPage = 12;

    const [currentItems, setCurrentItems] = useState(null);
    const [pageCount, setPageCount] = useState(0);

    const [itemOffset, setItemOffset] = useState(0);

    const setarTool = () => {
        // eslint-disable-next-line array-callback-return
        const filtered = tools.filter((tool) => {
            if (tool.name.toLowerCase().includes(searchInfo.toLowerCase())) {
                return tool;
            }
        })
        return filtered;
    }

    const handlePageClick = (event) => {
        const newOffset = (event.selected * itemsPerPage) % toolListInfo.length;
        setItemOffset(newOffset);
    };

    useEffect(() => {
        setToolListInfo(tools);
    
        if (tools && searchInfo) {
            setToolListInfo(setarTool);
        }

        if (toolListInfo) {
            const endOffset = itemOffset + itemsPerPage;
            setCurrentItems(toolListInfo.slice(itemOffset, endOffset));
            setPageCount(Math.ceil(toolListInfo.length / itemsPerPage));
        }
    }, [searchInfo, itemOffset, toolListInfo, tools, setToolListInfo])

    return (
        <>
            <ToolsContent>
                {
                    currentItems ?
                        !searchInfo ?
                            currentItems.map((tool, index) => 
                                <Box
                                    key={ index }
                                    appId={ tool?.app_id }
                                    name={ tool?.name }
                                    color={ tool?.color }
                                    icon={ tool?.icon }
                                    link={ tool?.link }
                                />
                            )
                            : toolListInfo ?
                                toolListInfo.map((tool, index) => 
                                <Box
                                    key={ index }
                                    appId={ tool?.app_id }
                                    name={ tool?.name }
                                    color={ tool?.color }
                                    icon={ tool?.icon }
                                    link={ tool?.link }
                                />
                                )
                                : 'Nenhuma ferramenta encontrada'
                    : 'Ainda não há ferramentas'
                }
            </ToolsContent>
            <Pagination
                breakLabel='...'
                nextLabel={ <NextArrow /> }
                onPageChange={handlePageClick}
                // pageRangeDisplayed={5}
                pageCount={pageCount}
                previousLabel={ <BackArrow /> }
                renderOnZeroPageCount={null}
            />
        </>
    );
}
