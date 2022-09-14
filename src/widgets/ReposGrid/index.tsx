import React from "react";
import GitHubRepoModel from "../../models/GitHubRepoModel";
import Container from "../Container";
import './styles.css';
import { AiOutlineFolder, AiOutlineStar, AiOutlineCode } from 'react-icons/ai'

interface ReposGridProps {
    repos: GitHubRepoModel[],
}

function ReposGrid(props: ReposGridProps) {
    return (<div id="grid">
        {
            props.repos.sort((a, b) => a.pushed_at > b.pushed_at ? 1 : -1).reverse().slice(0, 6)
                .map((repo) =>
                    <a href={repo.html_url} target="_blank" rel='noreferrer' className="clickable">
                        <Container className="repo-tile">
                            <div className="row">
                                <AiOutlineFolder size={25} />
                                <h3>{repo.name}</h3>
                            </div>
                            <p>{repo.description}</p>
                            <div className="row bottom">
                                <div className="row">
                                    <AiOutlineStar />
                                    <p>{repo.stargazers_count}</p></div>
                                <div className="row">
                                    <AiOutlineCode />
                                    <p>{repo.language}</p>
                                </div>
                            </div>
                        </Container>
                    </a>
                )
        }
    </div>);
}

export default ReposGrid;