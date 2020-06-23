<template>
  <q-page class="q-pa-xs">
    <div class="row">
      <div class="col-xs-12 col-sm-12 col-md-6 q-pa-sm" v-for="info in infos" :key="info.id">
        <infocard :info="info" />
      </div>
    </div>
  </q-page>
</template>

<script>
export default {
  data: () => ({
    infos: [
      {
        id: "0",
        title: "What is Covid-19?",
        subtitle:
          "a communicable respiratory disease caused by a new strain of coronavirus that causes illness in humans",
        text: [
          "Coronavirus disease (COVID-19) is an infectious disease caused by a newly discovered coronavirus.",
          "Most people who fall sick with COVID-19 will experience mild to moderate symptoms and recover without special treatment."
        ],
        link: "https://www.who.int/health-topics/coronavirus#tab=tab_1"
      },
      {
        id: "1",
        title: "How it spreads",
        subtitle:
          "The virus that causes COVID-19 is mainly transmitted through droplets",
        text: [
          "The virus that causes COVID-19 is mainly transmitted through droplets generated when an infected person coughs, sneezes, or exhales. These droplets are too heavy to hang in the air, and quickly fall on floors or surfaces",
          "You can be infected by breathing in the virus if you are within close proximity of someone who has COVID-19, or by touching a contaminated surface and then your eyes, nose or mouth"
        ],
        link: "https://www.who.int/health-topics/coronavirus#tab=tab_1"
      },
      {
        id: "2",
        title: "Protect yourself",
        subtitle: "Follow advice provided by your local public health agency",
        text: [
          "Protect yourself and others around you by knowing the facts and taking appropriate precautions. ",
          "Clean your hands often. Use soap and water, or an alcohol-based hand rub.",
          "Maintain a safe distance from anyone who is coughing or sneezing.",
          "Don’t touch your eyes, nose or mouth.",
          "Cover your nose and mouth with your bent elbow or a tissue when you cough or sneeze. Stay home if you feel unwell.",
          "If you have a fever, cough and difficulty breathing, seek medical attention. Call in advance. Follow the directions of your local health authority",
          "Avoiding unneeded visits to medical facilities allows healthcare systems to operate more effectively, therefore protecting you and others."
        ],
        link: "https://www.who.int/health-topics/coronavirus#tab=tab_2"
      },
      {
        id: "3",
        title: "Symptoms & Signs",
        subtitle: "COVID-19 affects different people in different ways",
        text: [
          "Most infected people will develop mild to moderate illness and recover without hospitalization."
        ],
        list: {
          serious: {
            title: "Serious Symptoms",
            symptoms: [
              "difficulty breathing or shortness of breath",
              "chest pain or pressure",
              "loss of speech or movement"
            ],
            color: "negative"
          },
          common: {
            title: "Common Symptoms",
            symptoms: ["fever", "dry cough", "tiredness"],
            color: "warning"
          },
          uncommon: {
            title: "Uncommon Symptoms",
            symptoms: [
              "aches and pains",
              "sore throat diarrhoea",
              "conjunctivitis",
              "headache",
              "loss of taste or smell",
              "a rash on skin, or discolouration of fingers or toes"
            ],
            color: "secondary"
          }
        },
        link: "https://www.who.int/health-topics/coronavirus#tab=tab_3"
      }
    ]
  }),
  props: {},
  computed: {},
  components: {
    infocard: () => import("../components/Information/InfoCard")
  },
  methods: {},
  created() {}
};
</script>
