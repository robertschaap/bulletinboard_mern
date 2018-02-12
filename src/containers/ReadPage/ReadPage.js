import React from 'react';
import Comment from '../../components/Comment/Comment';

const ReadPage = () => (
    <main>
        <section id="comments">
            <h2>Read Something</h2>
            <select id="sortbtn" name="com_sort">
                <option value="desc" selected="selected">Newest First</option>
                <option value="asc">Oldest First</option>
            </select>

            <Comment image="Bunny" title="Title" name="Name" body="Body"/>
            <Comment image="Bunny" title="Title" name="Name" body="Body"/>
            <Comment image="Bunny" title="Title" name="Name" body="Body"/>
            <Comment image="Bunny" title="Title" name="Name" body="Body"/>
        </section>

        <section>
            <button id="loadcomments" class="wrapper">Load More Comments</button>
        </section>
    </main>
);

export default ReadPage;
