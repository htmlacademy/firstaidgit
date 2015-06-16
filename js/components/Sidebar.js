import React from 'react';
import SVGIcon from './../utils/SVG';

let Sidebar = React.createClass({
    render() {
        return (
            <div className="sidebar-wrapper">
                <a className="nb" href="https://github.com/htmlacademy/firstaidgit">
                    <SVGIcon class="icon-github" icon="githubFull"/>
                </a>

                <h2 className="sidebar--title">Источники</h2>
                <p>Ответы на&nbsp;эти вопросы были собраны из&nbsp;личного опыта,
                  Stack Overflow и&nbsp;официальной документации по&nbsp;Git.
                </p>

                <h2 className="sidebar--title">Внести свой вклад</h2>
                <p>Ищите проблему, которой здесь нет, или нашли ответ, который можно улучшить? Отлично! Вы&nbsp;можете отправить Pull Request в&nbsp;<a href="https://github.com/htmlacademy/firstaidgit">Github</a> страницы проекта.</p>
                <p>Вопросы? Пишите нам <a href="https://twitter.com/htmlacademy_ru">в&nbsp;Twitter</a>.</p>

        </div>
        );
    }
});

export default Sidebar;
