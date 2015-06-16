import React from 'react';

let Footer = React.createClass({
    render() {
        return (
            <footer className="footer row">
                <div className="wrapper">
                    <div className="column-4 ms-fw">
                        <h3>Автор</h3>
                        <p>First Aid Git&nbsp;&mdash; проект <a href="http://www.ricardofilipe.com">Рикардо Магальяйнша</a>.</p>
                        <p>Перевод&nbsp;&mdash; <a href="https://htmlacademy.ru">HTML&nbsp;Academy</a>.</p>
                        <p><a href="#/about">Прочитать ещё</a> о&nbsp;проекте.</p>
                    </div>
                    <div className="column-3 ms-fw">
                        <h3>Другие ресурсы</h3>
                        <ul>
                            <li><a href="https://github.com/k88hudson/git-flight-rules">Путеводитель по Git</a></li>
                            <li><a href="http://git-scm.com/documentation">Документация Git</a></li>
                            <li><a href="http://git-scm.com/book/en/v2/Getting-Started-Git-Basics">Основы Git</a></li>
                            <li><a href="https://try.github.io/levels/1/challenges/1">Школа GitHub</a></li>
                        </ul>
                    </div>
                    <div className="column-3 ms-fw">
                        <h3>Благодарности</h3>
                        Поисковый алгоритм&nbsp;&mdash; <a href="http://kiro.me/projects/fuse.html">Fuse.js</a>, а
                        конвертер Markdown&nbsp;&mdash; <a href="https://github.com/showdownjs/showdown">Showdown.js</a>
                    </div>
                </div>
            </footer>
        );
    }
});

export default Footer;
