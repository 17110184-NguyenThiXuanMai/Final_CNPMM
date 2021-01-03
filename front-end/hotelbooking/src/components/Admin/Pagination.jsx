import React, { Component } from 'react'

export default class Pagination extends Component {
    render() {
        const { currentPage, totalPages } = this.state;
        return (
            <div>
                 <Card.Footer>
                    <div style={{ "float": "left" }}>
                        Showing Page {currentPage} of {totalPages}
                    </div>
                    <div style={{ "float": "right" }}>
                        <InputGroup size="sm">
                            <InputGroup.Prepend>
                                <Button type="button" variant="outline-info" disabled={currentPage === 1 ? true : false}
                                    onClick={this.firstPage}> <BsChevronBarLeft />
                                First
                                </Button>
                                <Button type="button" variant="outline-info" disabled={currentPage === 1 ? true : false}
                                    onClick={this.prevPage}> <BsChevronLeft />
                                Prev
                                </Button>
                            </InputGroup.Prepend>
                            <FormControl className={"page-num"} name="currentPage" value={currentPage}
                                onChange={this.changePage} />
                            <InputGroup.Append>
                                <Button type="button" variant="outline-info" disabled={currentPage === totalPages ? true : false}
                                    onClick={this.nextPage}>
                                    Next <BsChevronRight />
                                </Button>
                                <Button type="button" variant="outline-info" disabled={currentPage === totalPages ? true : false}
                                    onClick={this.lastPage}> <BsChevronBarRight />
                                    Last
                                </Button>
                            </InputGroup.Append>
                        </InputGroup>
                    </div>
                </Card.Footer>
            </div>
        )
    }
}
