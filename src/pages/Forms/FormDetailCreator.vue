<template>
    <div class="container">
        <div class="row my-3">
            <div class="col-md-4 col-12">
                <div class="form-group">
                    <h5>Type</h5>
                    <span class="badge bg-primary">public</span>
                </div>
            </div>
            <div class="col-12 col-md-4">
                <div class="form-group">
                    <h5>Expired</h5>
                    2024-03-29
                </div>
            </div>
            <div class="col-12 col-md-4">
                <div class="form-group">
                    <h5>Allowed Domain</h5>
                    gmail.com, yahoo.com
                </div>
            </div>
        </div>

        <div class="row mb-3">
            <div class="col-md-12">
                <div class="form-group">
                    <h3>Question</h3>
                    <table class="table table-striped align-middle text-center">
                        <thead>
                            <tr>
                                <th>#</th>
                                <th>Question</th>
                                <th>Type</th>
                                <th>Is Required</th>
                                <th>Option</th>
                                <th>Action</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <th>1</th>
                                <td>Question 1</td>
                                <td>text</td>
                                <td>✅</td>
                                <td>-</td>
                                <td>
                                    <button class="btn btn-sm btn-primary" type="button" data-bs-toggle="modal"
                                        data-bs-target="#question-detail-modal">
                                        Detail
                                    </button>
                                </td>
                            </tr>
                            <tr>
                                <th>2</th>
                                <td>Question 2</td>
                                <td>select</td>
                                <td>❌</td>
                                <td>option 1, option 2, ...</td>
                                <td>
                                    <button class="btn btn-sm btn-primary" type="button" data-bs-toggle="modal"
                                        data-bs-target="#question-detail-modal">
                                        Detail
                                    </button>
                                </td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
        </div>

        <div class="row mb-3">
            <div class="col-12">
                <h3>Respondens</h3>
                <table class="table table-striped text-center align-middle">
                    <thead>
                        <tr>
                            <th>#</th>
                            <th>Name</th>
                            <th>Email</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <th>1</th>
                            <td>Name 1</td>
                            <td>email1@gmail.com</td>
                            <td>
                                <button type="button" class="btn btn-sm btn-primary" data-bs-toggle="modal"
                                    data-bs-target="#user-answer-modal">
                                    Show Answer
                                </button>
                            </td>
                        </tr>
                        <tr>
                            <th>2</th>
                            <td>Name 2</td>
                            <td>email2@gmail.com</td>
                            <td>
                                <button type="button" class="btn btn-sm btn-primary" data-bs-toggle="modal"
                                    data-bs-target="#user-answer-modal">
                                    Show Answer
                                </button>
                            </td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>
    </div>

    <!-- MOdal -->

    <div class="modal" tabindex="-1" id="question-detail-modal">
        <div class="modal-dialog">
            <div class="modal-content">
                <div class="modal-header">
                    <h5>Question</h5>
                    <button type="button" data-bs-dismiss="modal" class="btn-close"></button>
                </div>
                <div class="modal-body">
                    <table class="table text-center align-middle table-striped">
                        <thead>
                            <tr>
                                <th>Respondens</th>
                                <th>Answer</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>Name 1</td>
                                <td>Answer 1</td>
                            </tr>
                            <tr>
                                <td>Name 2</td>
                                <td>Answer 2</td>
                            </tr>
                            <tr>
                                <td>Name 3</td>
                                <td>Answer 3</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    </div>
    <div class="modal" tabindex="-1" id="user-answer-modal">
        <div class="modal-dialog">
            <div class="modal-content">
                <div class="modal-header">
                    <h5>User Answer</h5>
                    <button type="button" data-bs-dismiss="modal" class="btn-close"></button>
                </div>
                <div class="modal-body">
                    <div class="text-center mb-3">Response from email@gmail.com</div>
                    <table class="table text-center align-middle table-striped">
                        <thead>
                            <tr>
                                <th>Question</th>
                                <th>Answer</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>Question 1</td>
                                <td>Answer 1</td>
                            </tr>
                            <tr>
                                <td>Question 2</td>
                                <td>Answer 2</td>
                            </tr>
                            <tr>
                                <td>Question 3</td>
                                <td>Answer 3</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    </div>

</template>
