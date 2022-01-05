import React from 'react'

const ArticleList = (props) => {

    return (

        <div className="accordion col-7" id="accordionExample">
            {props.articles && props.articles.map(article => {
                return (


                    <div class="accordion-item" key={article.id}>
                        <h2 class="accordion-header" id="headingOne">
                            <button class="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                                <h3>{article.id})</h3>&ensp;
                                <h4>{article.name}</h4>
                            </button>
                        </h2>
                        <div id="collapseOne" class="accordion-collapse collapse show" aria-labelledby="headingOne" data-bs-parent="#accordionExample">
                            <div class="accordion-body">
                                <p>{article.description}</p>
                            </div>
                        </div>
                    </div>

                )
            })}





        </div>
    )
}

export default ArticleList


