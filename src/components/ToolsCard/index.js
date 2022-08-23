import { useEffect, useState } from 'react';
import ReactPaginate from 'react-paginate';

import useToolData from '../../hooks/api/useToolsData';
import Box from './Box';
import { BackArrow, NextArrow, Pagination, ToolsContent } from './style';

export default function ToolsCard({ search, setSearch }) {
    const [toolsList, setToolsList] = useState([]);
    const { tools } = useToolData();

    const itemsPerPage = 12;

    const [currentItems, setCurrentItems] = useState(null);
    const [pageCount, setPageCount] = useState(0);

    const [itemOffset, setItemOffset] = useState(0);

    const handlePageClick = (event) => {
        const newOffset = (event.selected * itemsPerPage) % toolsList.length;
        setItemOffset(newOffset);
    };

    useEffect(() => {
        setToolsList(tools)
        if (tools && search) {
            setToolsList(() => {
                const filtered = tools.filter((tool) => {
                    if (tool.name.toLowerCase().includes(search.toLowerCase())) {
                        return tool;
                    }
                })
                return filtered;
            });
        }

        if (toolsList) {
            const endOffset = itemOffset + itemsPerPage;
            setCurrentItems(toolsList.slice(itemOffset, endOffset));
            setPageCount(Math.ceil(toolsList.length / itemsPerPage));
        }
    }, [tools, toolsList, search, itemOffset])

    return (
        <>
            <ToolsContent>
                {
                    currentItems ?
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
                    : 'Ainda não há ferramentas'
                }
            </ToolsContent>
            <Pagination
                breakLabel="..."
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
