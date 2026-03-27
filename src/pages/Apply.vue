<template>
  <div class="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
    <div class="mb-10 text-center">
      <h1 class="text-3xl font-bold text-gray-900">AI 軟體上線與審查計畫申請</h1>
      <p class="text-gray-500 mt-2">請依序填寫各項評估資料以利中心進行風險分級與法規檢核</p>
    </div>

    <!-- 上方進度條 -->
    <a-steps :current="1" class="mb-12">
      <a-step title="基本資料" />
      <a-step title="風險與法規自評" description="請完成下方 A 到 G 區塊" />
      <a-step title="文件上傳確認" />
      <a-step title="送出審核" />
    </a-steps>

    <a-form
      layout="vertical"
      :model="formData"
      @finish="onSubmit"
      class="bg-white p-8 rounded-xl shadow-sm border border-gray-100"
    >

      <!-- Block A -->
      <section class="mb-12">
        <h2 class="text-xl font-bold mb-6 pl-4 border-l-4 border-blue-500">A. 資訊安全維護及個資保護</h2>
        <a-form-item label="1. 預期資料存儲位置" name="a_storage">
          <a-select v-model:value="formData.a_storage" placeholder="請選擇儲存位置">
            <a-select-option value="local">院內私有雲 / 本機伺服器</a-select-option>
            <a-select-option value="public_cloud">公有雲 (AWS/GCP/Azure)</a-select-option>
            <a-select-option value="hybrid">混合雲架構</a-select-option>
          </a-select>
        </a-form-item>
        <a-form-item label="2. 個資去識別化與匿名化機制說明" name="a_deidentify">
          <a-textarea v-model:value="formData.a_deidentify" :rows="3" placeholder="請說明如何確保病患個資不外洩" />
        </a-form-item>
        <a-form-item label="3. 連線加密與身份驗證機制" name="a_auth">
          <a-textarea v-model:value="formData.a_auth" :rows="3" placeholder="請說明系統的存取授權機制" />
        </a-form-item>
        <a-form-item label="4. 備份與災害復原計畫" name="a_backup">
          <a-textarea v-model:value="formData.a_backup" :rows="3" placeholder="請說明資料備份頻率及復原演練規劃" />
        </a-form-item>
        <a-form-item label="5. 資安檢測報告上傳 (弱點掃描/滲透測試)">
          <a-upload action="/mock-upload">
            <a-button><UploadOutlined /> 點擊上傳</a-button>
          </a-upload>
        </a-form-item>
      </section>

      <!-- Block B -->
      <section class="mb-12">
        <h2 class="text-xl font-bold mb-6 pl-4 border-l-4 border-purple-500">B. 九大透明性原則及可解釋性分析</h2>
        <a-form-item label="使用之可解釋性AI (XAI) 工具或方法" name="b_xai_tool">
          <a-select v-model:value="formData.b_xai_tool" placeholder="如 SHAP, LIME, Grad-CAM 等">
            <a-select-option value="shap">SHAP</a-select-option>
            <a-select-option value="lime">LIME</a-select-option>
            <a-select-option value="cam">Grad-CAM 或注意力分佈圖</a-select-option>
            <a-select-option value="none">無使用 (Rule-based或傳統機器學習)</a-select-option>
          </a-select>
        </a-form-item>

        <a-alert message="依據透明度規範，以下 9 項原則皆須提供至少 50 字之說明。" type="info" show-icon class="mb-4" />
        <div v-for="p in NINE_PRINCIPLES" :key="p.no" class="pl-4 border-l-2 border-gray-200 mb-4">
          <a-form-item :label="`原則 ${p.no}: ${p.name}`" :name="['b_principles', String(p.no)]" :rules="[{ required: true, min: 50, message: '請輸入至少50字說明' }]">
            <a-textarea v-model:value="formData.b_principles[p.no]" :rows="3" :placeholder="`說明 ${p.name} 之實際作為...`" />
          </a-form-item>
        </div>

        <a-form-item label="透明度原則使用者手冊上傳">
          <a-upload action="/mock-upload">
            <a-button><UploadOutlined /> 點擊上傳</a-button>
          </a-upload>
        </a-form-item>
      </section>

      <!-- Block C -->
      <section class="mb-12">
        <h2 class="text-xl font-bold mb-6 pl-4 border-l-4 border-green-500">C. AI生命週期持續管理計畫</h2>
        <a-form-item label="1. 模型效能監測頻率" name="c_freq">
          <a-radio-group v-model:value="formData.c_freq">
            <a-radio value="daily">每日</a-radio>
            <a-radio value="weekly">每週</a-radio>
            <a-radio value="monthly">每月</a-radio>
            <a-radio value="quarterly">每季</a-radio>
          </a-radio-group>
        </a-form-item>
        <a-form-item label="2. 模型偏差 (Data Drift) 預警機制" name="c_drift">
          <a-textarea v-model:value="formData.c_drift" :rows="3" />
        </a-form-item>
        <a-form-item label="3. 召回與重新訓練條件" name="c_retrain">
          <a-textarea v-model:value="formData.c_retrain" :rows="3" />
        </a-form-item>
        <a-form-item label="4. 系統異常退場(終止服務)標準" name="c_exit">
          <a-textarea v-model:value="formData.c_exit" :rows="3" />
        </a-form-item>
      </section>

      <!-- Block D -->
      <section class="mb-12">
        <h2 class="text-xl font-bold mb-6 pl-4 border-l-4 border-red-500">D. 臨床風險分級</h2>
        <p class="text-gray-600 mb-4">請點選符合本系統特性之交叉儲存格，系統將自動計算風險等級（1~4 級）。3 級以上屬高風險，需額外上傳 IRB 證明。</p>

        <div class="overflow-x-auto mb-6">
          <table class="w-full text-center border-collapse border border-gray-300">
            <thead>
              <tr class="bg-gray-100">
                <th class="border border-gray-300 p-2"></th>
                <th v-for="(rLabel, rKey) in ROLE_LABELS" :key="rKey" class="border border-gray-300 p-2 font-semibold">
                  {{ rLabel }}
                </th>
              </tr>
            </thead>
            <tbody>
              <tr v-for="(sLabel, sKey) in SEVERITY_LABELS" :key="sKey">
                <td class="border border-gray-300 p-2 font-semibold bg-gray-50">{{ sLabel }}</td>
                <td
                  v-for="(_, rKey) in ROLE_LABELS"
                  :key="rKey"
                  class="border border-gray-300 p-4 cursor-pointer transition-colors"
                  :class="{ 'bg-blue-100 ring-2 ring-blue-500 inset-0': formData.d_severity === sKey && formData.d_role === rKey, 'hover:bg-gray-50': true }"
                  @click="formData.d_severity = String(sKey); formData.d_role = String(rKey)"
                >
                  <RiskBadge :level="RISK_MATRIX[sKey][rKey]" />
                </td>
              </tr>
            </tbody>
          </table>
        </div>

        <div class="mb-6 p-4 bg-gray-50 rounded flex items-center justify-between">
          <span class="font-bold text-lg">系統判定風險等級：</span>
          <span v-if="computedRisk" class="text-xl">
            <RiskBadge :level="computedRisk" style="transform: scale(1.2)" />
          </span>
          <span v-else class="text-gray-400">請由上方矩陣選擇</span>
        </div>

        <a-form-item label="分級判斷說明" name="d_justification">
          <a-textarea v-model:value="formData.d_justification" :rows="3" placeholder="請簡述為何選擇該嚴重程度與決策角色..." />
        </a-form-item>

        <Transition name="fade">
          <a-form-item v-if="computedRisk && computedRisk >= 3" label="高風險專案 - IRB 核准文件上傳" required>
            <a-alert message="因為風險等級為 3 級 (含) 以上，依法規必須檢附人體試驗委員會 (IRB) 的審查核准文件。" type="warning" show-icon class="mb-2" />
            <a-upload action="/mock-upload">
              <a-button danger><UploadOutlined /> 上傳 IRB 證明文件</a-button>
            </a-upload>
          </a-form-item>
        </Transition>
      </section>

      <!-- Block E -->
      <section class="mb-12">
        <h2 class="text-xl font-bold mb-6 pl-4 border-l-4 border-orange-500">E. 醫材取證狀態 (SaMD)</h2>
        <a-form-item label="目前醫療器材軟體查驗登記狀態" name="e_status">
          <a-radio-group v-model:value="formData.e_status">
            <a-radio value="approved">已取得 TFDA 醫材許可</a-radio>
            <a-radio value="exempt">經判定不屬於醫療器材 / 免查驗登記</a-radio>
            <a-radio value="pending">正在申請中 或 屬於院內自行研發且僅供院內使用</a-radio>
          </a-radio-group>
        </a-form-item>
        <a-form-item v-if="formData.e_status === 'approved'" label="TFDA 醫材許可證字號" name="e_number">
          <a-input v-model:value="formData.e_number" placeholder="衛部醫器製/輸字第 XXXXXX 號" />
        </a-form-item>
        <a-form-item label="相關證明文件上傳" extra="包含許可證影本或TFDA非醫材判定函">
          <a-upload action="/mock-upload">
            <a-button><UploadOutlined /> 點擊上傳</a-button>
          </a-upload>
        </a-form-item>
      </section>

      <!-- Block F -->
      <section class="mb-12">
        <h2 class="text-xl font-bold mb-6 pl-4 border-l-4 border-teal-500">F. 臨床標準作業流程 (SOPs)</h2>
        <a-form-item label="臨床操作手冊與應變計畫上傳">
          <a-upload action="/mock-upload">
            <a-button><UploadOutlined /> 上傳 SOP 文件</a-button>
          </a-upload>
        </a-form-item>
        <a-form-item name="f_checks">
          <a-checkbox-group v-model:value="formData.f_checks" class="flex flex-col space-y-4 shadow-sm p-4 bg-gray-50 rounded border border-gray-200">
            <a-checkbox value="c1">已明確定義 AI 無法處理或發生系統故障時的「降級 / 備援流程」(Fallback mechanism)</a-checkbox>
            <a-checkbox value="c2">已將「最終臨床決策責任歸屬人類醫師」之警語納入使用者介面</a-checkbox>
            <a-checkbox value="c3">已完成對終端臨床使用者的教育訓練計畫規劃</a-checkbox>
          </a-checkbox-group>
        </a-form-item>
      </section>

      <!-- Block G -->
      <section class="mb-12">
        <h2 class="text-xl font-bold mb-6 pl-4 border-l-4 border-indigo-500">G. 資料標準相容性聲明</h2>
        <p class="text-gray-600 mb-4">依據本院資料治理政策，確認資料格式必須全面採用 FHIR 和 TW Core IG 國際標準互通架構整合，以利未來資料之介接與交換。</p>
        <a-form-item name="g_standards">
          <a-checkbox-group v-model:value="formData.g_standards" class="flex flex-col space-y-4">
            <a-checkbox value="fhir">資料格式符合 FHIR (Fast Healthcare Interoperability Resources) 標準</a-checkbox>
            <a-checkbox value="twcoreig">整合架構符合 TW Core IG 規範</a-checkbox>
            <a-checkbox value="dicom">影像資料符合 DICOM 協定</a-checkbox>
            <a-checkbox value="icd">診斷編碼符合 ICD-10 規範</a-checkbox>
          </a-checkbox-group>
        </a-form-item>
        <a-form-item label="其他資料規格或介接備註" name="g_note">
          <a-textarea v-model:value="formData.g_note" :rows="3" />
        </a-form-item>
      </section>

      <!-- Submit -->
      <div class="mt-8 border-t border-gray-200 pt-8 flex justify-center space-x-6">
        <a-button size="large">儲存草稿</a-button>
        <a-button type="primary" size="large" html-type="submit" class="px-12 font-bold">送出審核申請</a-button>
      </div>

    </a-form>
  </div>
</template>

<script setup lang="ts">
import { reactive, computed } from 'vue'
import { Modal } from 'ant-design-vue'
import { UploadOutlined } from '@ant-design/icons-vue'
import { RISK_MATRIX, SEVERITY_LABELS, ROLE_LABELS } from '@/constants/riskMatrix'
import { NINE_PRINCIPLES } from '@/constants/transparency'

// Form state
const formData = reactive({
  a_storage: undefined,
  a_deidentify: '',
  a_auth: '',
  a_backup: '',

  b_xai_tool: undefined,
  b_principles: {} as Record<string, string>,

  c_freq: undefined,
  c_drift: '',
  c_retrain: '',
  c_exit: '',

  d_severity: undefined as string | undefined,
  d_role: undefined as string | undefined,
  d_justification: '',

  e_status: undefined,
  e_number: '',

  f_checks: [],
  g_standards: [],
  g_note: ''
})

// Initialize b_principles keys
NINE_PRINCIPLES.forEach(p => {
  formData.b_principles[p.no] = ''
})

const computedRisk = computed(() => {
  if (formData.d_severity && formData.d_role) {
    return RISK_MATRIX[formData.d_severity]?.[formData.d_role] ?? null
  }
  return null
})

const onSubmit = () => {
  Modal.success({
    title: '申請已成功送出',
    content: '您的 AI 軟體審核申請已經提交至管理中心。我們會盡快安排倫理委員會及工作小組進行初審，請耐心等候通知。',
    okText: '確認'
  })
}
</script>

<style scoped>
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.3s ease;
}
.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}
</style>
