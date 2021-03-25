import React from 'react'

import { Collapse, Button } from 'antd';

const { Panel } = Collapse;

const AppFaq = () => {
    return (
        <div className="block faqBlock">
            <div className="container-fluid">
                <div className="titleHolder">
                    <h2>FAQs</h2>
                    <p>Perspiciatis vero similique, ut ducimus modi ipsam autem tempora</p>
                </div>
                <Collapse defaultActiveKey={['1']} accordion>
                    <Panel header="This is panel header 1" key="1">
                        <p>Collapse content</p>
                    </Panel>
                    <Panel header="This is panel header 2" key="2">
                    <   p>Collapse content</p>
                    </Panel>
                    <Panel header="This is panel header 3" key="3">
                        <p>Collapse content</p>
                    </Panel>
                </Collapse>
                <div className="quickSupport">
                    <h3>Necesitas ayuda?</h3>
                    <p>Perspiciatis vero similique, ut ducimus modi ipsam autem tempora. Perspiciatis vero similique, ut ducimus modi ipsam autem tempora. Perspiciatis vero similique, ut ducimus modi ipsam autem tempora</p>
                    <Button 
                        type="primary" 
                        size="large">
                        <i className="fas fa-envelope"></i>
                        Email faqs
                    </Button>
                </div>
            </div>            
        </div>
    )
}

export default AppFaq
