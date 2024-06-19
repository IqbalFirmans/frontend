<template>
  <div class="container">
    <form action="" @submit.prevent="createForm">
      <section id="form-detail">
        <div class="row mb-3">
          <div class="col-6">
            <label for="name">Form Name</label>
            <input type="text" class="form-control" placeholder="Name or Title of your form" v-model="form.name"
              id="name" />
          </div>
          <div class="col-6">
            <label for="">Form Expired</label>
            <input type="date" class="form-control" />
          </div>
        </div>
        <div class="row mb-3">
          <div class="col-12">
            <label for="name">Form Description</label>
            <textarea class="form-control" placeholder="Description of your form" v-model="form.description"
              id="description"></textarea>
          </div>
        </div>
        <div class="row mb-3">
          <div class="col-12">
            <label for="">Form Type</label>
            <select class="form-select" v-model="form.type" id="type">
              <option value="" selected disabled>
                -- select option type --
              </option>
              <option value="public">Public</option>
              <option value="private">Private</option>
            </select>
          </div>
          <div class="col-12 mt-3" v-if="form.type == 'private'">
            <div class="d-flex justify-content-between align-items-center">
              <div>Domain</div>
              <button type="button" class="btn btn-sm btn-primary" @click="addNewDomain">
                + add domain
              </button>
            </div>
            <div class="mt-2">
              <div class="input-group mb-1" v-for="(domain, domainIndex) in form.domains" :key="domainIndex">
                <input type="text" class="form-control" placeholder="domain" v-model="form.domains[domainIndex]"
                  :id="domain + domainIndex" />
                <button type="button" class="btn btn-danger" @click="removeDomain(domainIndex)">
                  &times;
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="question-list">
        <div class="mb-3 d-flex justify-content-between align-items-center">
          <h3>Question List</h3>
          <button type="button" class="btn btn-sm btn-primary" data-bs-toggle="modal" data-bs-target="#question-modal">
            + question
          </button>
        </div>
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
                <button class="btn btn-sm btn-danger" type="button">
                  Delete
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
                <button class="btn btn-sm btn-danger" type="button">
                  Delete
                </button>
              </td>
            </tr>
          </tbody>
        </table>
      </section>

      <button class="btn btn-primary mt-3">Create Form</button>
    </form>
  </div>

  <!-- S-Modal -->
  <div class="modal" tabindex="-1" id="question-modal">
    <div class="modal-dialog">
      <div class="modal-content">
        <div class="modal-header">
          <h5>Add New Question</h5>
          <button type="button" class="btn-close" data-bs-dismiss="modal"></button>
        </div>
        <div class="modal-body">
          <div class="form-group mb-3">
            <label>Question</label>
            <input type="text" class="form-control" placeholder="Question" v-model="questions.question" />
          </div>
          <div class="form-group mb-3">
            <label>Type</label>
            <select class="form-select" v-model="questions.type">
              <option value="" disabled selected>
                -- select question type --
              </option>
              <option value="text">Text</option>
              <option value="number">Number</option>
              <option value="checkbox">Checkbox</option>
              <option value="select">Select</option>
            </select>
          </div>
          <div class="form-group mb-3" v-if="questions.type == 'checkbox' || questions.type == 'select'">
            <label>Option</label>
            <input type="text" placeholder="Option if type is checkbox or select. separate the option by comma (,)"
              class="form-control" v-model="questions.options" />
          </div>
          <div class="form-group mb-3">
            <input type="checkbox" class="form-checkbox m-1" v-model="questions.is_required" id="question-required"/>
            <label for="question-required">is required</label>
          </div>
        </div>
        <div class="modal-footer">
          <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">
            Close
          </button>
          <button type="button" class="btn btn-primary">+ submit</button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import axios from 'axios'

export default {
  emits: ['updateUser'],
  data() {
    return {
      form: {
        name: "",
        description: "",
        type: "",
        domains: [],
        expired: "",
        questions: [],
      },
      questions: {
        question: "",
        description: "",
        type: "",
        is_required: false,
        options: ""
      }
    }
  },

  methods: {
    addNewDomain() {
      this.form.domains.push("")
    },
    removeDomain(domainIndex) {
      this.form.domains.splice(domainIndex, 1)
    },
    getToken() {
      const data = JSON.parse(localStorage.getItem('data_user'))
      return data.token
    },
    addNewQuestion() {
      
    },
    createForm() {
      axios.post(import.meta.env.VITE_BASE_API_URL + '/forms?token=' + this.getToken(), this.form).then(response => {
        alert(response.data.message)
        this.$router.push('/')
      })
        .catch(error => {
          alert(error.response.data.message)
        })
    }
  }


}
</script>