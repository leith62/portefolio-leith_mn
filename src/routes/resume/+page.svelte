<script lang="ts">
  import { resumeData } from '$lib/data/resume';
  import CommonPage from '$lib/components/CommonPage.svelte';

  const { file, title } = resumeData;
</script>

<CommonPage {title}>
  <div class="resume">
   

    <!-- Intégration du fichier PDF pour lecture -->
    <iframe
      src={file}
      title="PDF Viewer"
      width="100%"
      height="600px"
      style="border: none; margin-top: 20px;"
    ></iframe>
  </div>
</CommonPage>

<style lang="scss">
  .resume {
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-top: 20px;

    a {
      color: inherit;
      text-decoration: none;
      margin-bottom: 20px;

      &:hover {
        text-decoration: underline;
      }
    }

    iframe {
      border: 1px solid #ccc;
    }
  }
</style>
