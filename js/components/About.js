import React from 'react';

let About = React.createClass({
    render() {
        return (
            <section className="main-content section-about wrapper">
                <div className="row">
                    <div className="column-12">
                        <h2 className="section-title">Что это такое?</h2>
                        <p className="section-copy">First Aid Git создавался как учебный проект, когда я&nbsp;подробно изучал использование <a href="http://webpack.github.io">Webpack</a> вместе с&nbsp;<a href="https://facebook.github.io/react/">React</a>. Через какое-то время я&nbsp;решил, что надо превратить это во&nbsp;что-нибудь полезное, поэтому начал собирать посты о&nbsp;самых частых вопросах по&nbsp;проблемам с&nbsp;Git.</p>
                        <p className="section-copy">Целью было создание простого и&nbsp;быстрого поиска по&nbsp;самым популярным Git проблемам, так как у&nbsp;меня по&nbsp;ним накопились десятки закладок в&nbsp;Stack Overflow.</p>
                    </div>

                    <div className="row">
                        <div className="column-12">
                            <h2 className="section-title">Исходный код выглядит немного неряшливо...?</h2>
                            <p className="section-copy">Потому что он&nbsp;такой и&nbsp;есть! Так как это не&nbsp;задумывалось изначально как проект, я&nbsp;особо и&nbsp;не&nbsp;следил за&nbsp;его структурой... поэтому я&nbsp;буду подчищать код по&nbsp;мере развития проекта.</p>
                        </div>
                    </div>

                    <div className="row">
                        <div className="column-12">
                            <h2 className="section-title">А можно помочь?</h2>
                                <p className="section-copy">Можно и&nbsp;нужно! Присылайте ваши изменения в&nbsp;<a href="https://github.com/htmlacademy/firstaidgit">Github</a> или <a href="https://twitter.com/htmlacademy_ru">Twitter</a>. Будем рады вашим отзывам и&nbsp;комментариям.</p>
                        </div>
                    </div>
                </div>

            </section>
        );
    }
});

export default About;
