import React, { Component } from 'react';
import Icofont from 'react-icofont';
import LinkDuo from '../utils/LinkDuo';

class BlogPost extends Component {
    state = {
        homeNews: [],
          months: [
            'Jan',
            'Feb',
            'Mar',
            'Apr',
            'May',
            'Jun',
            'Jul',
            'Aug',
            'Sep',
            'Oct',
            'Nov',
            'Dec'
          ]
    };
    extractDay = date => {
      const dateMilli = Date.parse(date);
      return new Date(dateMilli * 1000).getDay();
    };
    
    extractMonth = date => {
      const dateMilli = Date.parse(date);
      const monthNumber = new Date(dateMilli * 1000).getMonth();
      return this.state.months[monthNumber];
        
    };

    render() {
        const { data } = this.props
        
            //BlogPost loop start
            const blogpostdata = data.map((blogpost, index) => (
                <div className="col-lg-12" key={index}>
                    <div className="blog-item">
                        <LinkDuo to={blogpost.url} className="blog-img"><img src={`http://localhost:4000/${blogpost.image}`} alt="blogpost-one" /></LinkDuo>
                        <div className="blog-info">
                            <div className="date-box">
                                {this.extractDay(blogpost.dateStart)} <span className="month">{this.extractMonth(blogpost.dateStart)}</span>
                            </div>
                            <div className="title-meta">
                                <h2><LinkDuo to={blogpost.url}>{blogpost.title}</LinkDuo></h2>
                                <div className="post-meta">
                                    <ul>
                                        <li><Icofont icon="icofont-funky-man" /> Posted By: {blogpost.user ? blogpost.user.username : 'Unknown'}</li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                        <div className="post-content">
                            <p>{blogpost.description}</p>
                        </div>
                    </div>
                </div>
            ));
        
        //BlogPost loop END
        return (
            <React.Fragment>
                <section id="blog" className="our-blog main-blog">
                    <div className="container">
                        <div className="row">


                                    {blogpostdata}

                                    <div className="col-lg-12 pagination-area text-center">
                                        <ul className="pagination">
                                            <li><LinkDuo to= "/#0"><Icofont icon="icofont-simple-left" /> Previous</LinkDuo></li>
                                            <li className="active"><LinkDuo to= "/#0">1</LinkDuo></li>
                                            <li><LinkDuo to= "/#0">2</LinkDuo></li>
                                            <li><LinkDuo to= "/#0">3</LinkDuo></li>
                                            <li><LinkDuo to= "/#0">4</LinkDuo></li>
                                            <li><LinkDuo to= "/#0">Next <Icofont icon="icofont-simple-right" /></LinkDuo></li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                            
                    </section>
            </React.Fragment>
        );
    }
}

export default BlogPost;