import React from 'react';

import MenuItem from '../menu-item/menu-item.component';

import './directory.styles.scss';


class Directory extends React.Component {
    constructor() {
        super()
        this.state = {
            sections: [
                {
                    id: '1',
                    imgUrl: 'https://d4kkpd69xt9l7.cloudfront.net/sys-master/root/hb4/he1/9014475882526/razer-huntsman-elite-gallery08.jpg',
                    title: 'Keyboards'
                },
                {
                    id: '2',
                    imgUrl: 'https://d4kkpd69xt9l7.cloudfront.net/sys-master/root/h49/h27/9385452109854/razer-deathadder-v2-gallery-05.jpg',
                    title: 'Mice'
                },
                {
                    id: '3',
                    imgUrl: 'https://d4kkpd69xt9l7.cloudfront.net/sys-master/root/hdc/ha2/8888064475166/6a5505283fb7c504a937afaab541dbec0-7-mini-v2.jpg',
                    title: 'Mats'
                },
                {
                    id: '4',
                    imgUrl: 'https://d4kkpd69xt9l7.cloudfront.net/sys-master/root/h37/h01/9272632901662/razer-raptor-27-gallery-01.jpg',
                    title: 'Monitors'
                },
                {
                    id: '5',
                    imgUrl: 'https://d4kkpd69xt9l7.cloudfront.net/sys-master/root/he7/h50/9311622594590/kraken-ult-gallery-1500x1000-3.jpg',
                    title: 'Headsets'
                },
            ]
        }
    }
    render() {
        return (
            <div className="directory-menu">
                {
                    this.state.sections.map(({ id, title, imgUrl, size }) =>
                        <MenuItem title={title} key={id} imgUrl={imgUrl} size={size} />
                    )
                }
            </div>
        )
    }
}

export default Directory;