Vue.component("labor-hours", {
  template: `
    <div class="ui segment">
        <table class="ui very compact celled table">
            <caption class="ui left aligned header">{{ title }}</caption>
            <thead>
                <tr>
                    <th>基本設計</th>
                    <th>詳細設計</th>
                    <th>製造・単体テスト</th>
                    <th>結合テスト</th>
                    <th>総合テスト</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <td>{{ rate.proc1 }}</td>
                    <td>{{ rate.proc2 }}</td>
                    <td>{{ rate.proc3 }}</td>
                    <td>{{ rate.proc4 }}</td>
                    <td>{{ rate.proc5 }}</td>
                </tr>
                <tr>
                    <td><div class="ui mini input"><input type="text" v-model="values.proc1" @input="update('proc1')"></div></td>
                    <td><div class="ui mini input"><input type="text" v-model="values.proc2" @input="update('proc2')"></div></td>
                    <td><div class="ui mini input"><input type="text" v-model="values.proc3" @input="update('proc3')"></div></td>
                    <td><div class="ui mini input"><input type="text" v-model="values.proc4" @input="update('proc4')"></div></td>
                    <td><div class="ui mini input"><input type="text" v-model="values.proc5" @input="update('proc5')"></div></td>
                </tr>
            </tbody> 
        </table>
    </div>
  `,
  props: ["title", "rate"],
  data: function() {
    return {
      title: "",
      rate: { proc1: 0, proc2: 0, proc3: 0, proc4: 0, proc5: 0 },
      values: { proc1: "", proc2: "", proc3: "", proc4: "", proc5: "" }
    };
  },
  methods: {
    update: function(a) {
      const rate = this.rate[a];
      const value = this.values[a] - 0;
      const base = value / rate;
      _.keys(this.values).forEach(key => {
        if (key === a) {
          return;
        }

        this.values[key] = Math.round(base * this.rate[key] * 100) / 100;
      });
    }
  }
});

const app = new Vue({
  el: "#app",
  data: {
    configs: [
      {
        title: "新規",
        rate: {
          proc1: 15.4,
          proc2: 17.1,
          proc3: 34.2,
          proc4: 16.4,
          proc5: 11.7
        }
      },
      {
        title: "改修",
        rate: {
          proc1: 14.4,
          proc2: 16.0,
          proc3: 32.3,
          proc4: 18.2,
          proc5: 14.0
        }
      }
    ]
  }
});
