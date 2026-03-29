<template>
  <div class="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
    <div class="mb-10 text-center">
      <h1 class="text-3xl font-bold text-primary">線上申請表單</h1>
      <p class="text-gray-500 mt-2">請依序填寫六大審查項目，以利中心進行評估</p>
    </div>

    <a-form
      layout="vertical"
      :model="formData"
      @finish="onSubmit"
      class="bg-white p-8 rounded-xl shadow-sm border border-gray-100"
    >
      <!-- 1. 資訊安全維護及個資保護 -->
      <section class="mb-12">
        <h2 class="text-xl font-bold mb-6 pl-4 border-l-4 border-primary">1. 資訊安全維護及個資保護</h2>
        <a-form-item label="風險評估說明" name="security_risk_assessment">
          <a-textarea v-model:value="formData.security_risk_assessment" :rows="4" placeholder="請說明資料存儲、去識別化、加密、備份及災害復原計畫..." />
        </a-form-item>
      </section>

      <!-- 2. 九大透明性原則及可解釋性分析 -->
      <section class="mb-12">
        <h2 class="text-xl font-bold mb-6 pl-4 border-l-4 border-primary">2. 九大透明性原則及可解釋性分析</h2>
        <a-alert message="請確認皆已符合以下九大透明性原則，並提供對應說明。" type="info" show-icon class="mb-4" />
        <a-form-item v-for="p in NINE_PRINCIPLES" :key="p.no" :name="['transparency', p.no, 'checked']">
          <a-checkbox v-model:checked="formData.transparency[p.no].checked">{{ p.no }}. {{ p.name }}</a-checkbox>
          <a-textarea
            v-if="formData.transparency[p.no].checked"
            v-model:value="formData.transparency[p.no].description"
            :rows="2"
            :placeholder="`簡述 ${p.name} 的實施方式...`"
            class="mt-2"
          />
        </a-form-item>
      </section>

      <!-- 3. AI生命週期持續管理 -->
      <section class="mb-12">
        <h2 class="text-xl font-bold mb-6 pl-4 border-l-4 border-primary">3. AI生命週期持續管理</h2>
        <a-form-item label="再調校頻率、觸發條件、負責人姓名" name="lifecycle_management">
          <a-textarea v-model:value="formData.lifecycle_management" :rows="3" placeholder="例如：每6個月由陳醫師負責，當準確率下降5%時觸發..." />
        </a-form-item>
      </section>

      <!-- 4. 臨床風險分級 -->
      <section class="mb-12">
        <h2 class="text-xl font-bold mb-6 pl-4 border-l-4 border-primary">4. 臨床風險分級</h2>
        <a-form-item name="clinical_risk_level">
          <a-radio-group v-model:value="formData.clinical_risk_level">
            <a-tooltip title="風險級別 I 定義..."><a-radio value="I">I</a-radio></a-tooltip>
            <a-tooltip title="風險級別 II 定義..."><a-radio value="II">II</a-radio></a-tooltip>
            <a-tooltip title="風險級別 III 定義..."><a-radio value="III">III</a-radio></a-tooltip>
            <a-tooltip title="風險級別 IV 定義..."><a-radio value="IV">IV</a-radio></a-tooltip>
          </a-radio-group>
        </a-form-item>
      </section>

      <!-- 5. 醫材取證狀態 -->
      <section class="mb-12">
        <h2 class="text-xl font-bold mb-6 pl-4 border-l-4 border-primary">5. 醫材取證狀態</h2>
        <a-form-item name="medical_device_status">
          <a-radio-group v-model:value="formData.medical_device_status" @change="onStatusChange">
            <a-radio value="approved">已取證</a-radio>
            <a-radio value="pending">申請中</a-radio>
            <a-radio value="exempt">豁免適用</a-radio>
          </a-radio-group>
        </a-form-item>
        <a-form-item v-if="showLicenseNumber" label="許可文號" name="license_number">
          <a-input v-model:value="formData.license_number" placeholder="請輸入許可文號" />
        </a-form-item>
      </section>

      <!-- 6. 臨床標準化作業程序 (SOPs) -->
      <section class="mb-12">
        <h2 class="text-xl font-bold mb-6 pl-4 border-l-4 border-primary">6. 臨床標準化作業程序 (SOPs)</h2>
        <a-form-item name="sop_upload">
          <a-upload-dragger>
            <p class="ant-upload-drag-icon"><inbox-outlined></inbox-outlined></p>
            <p class="ant-upload-text">點擊或拖曳檔案至此區域以上傳</p>
            <p class="ant-upload-hint">支持單一或多個檔案上傳。</p>
          </a-upload-dragger>
        </a-form-item>
        <a-form-item name="sop_version">
          <a-date-picker v-model:value="formData.sop_version" placeholder="選擇SOP版本日期" class="w-full" />
        </a-form-item>
      </section>

      <!-- Submit -->
      <div class="mt-8 border-t border-gray-200 pt-8 flex justify-center">
        <a-button type="primary" size="large" html-type="submit" class="px-12 font-bold bg-accent hover:bg-green-600">
          送出申請
        </a-button>
      </div>
    </a-form>
  </div>
</template>

<script setup lang="ts">
import { reactive, ref } from 'vue'
import { Modal } from 'ant-design-vue'
import { InboxOutlined } from '@ant-design/icons-vue'
import { NINE_PRINCIPLES } from '@/constants/transparency'

const showLicenseNumber = ref(false)

const onStatusChange = (e: any) => {
  showLicenseNumber.value = e.target.value === 'approved'
}

type TransparencyEntry = {
  checked: boolean;
  description: string;
}

const formData = reactive<{
  security_risk_assessment: string;
  transparency: Record<number, TransparencyEntry>;
  lifecycle_management: string;
  clinical_risk_level: string;
  medical_device_status: string;
  license_number?: string;
  sop_version: any;
}>({
  security_risk_assessment: '',
  transparency: {},
  lifecycle_management: '',
  clinical_risk_level: '',
  medical_device_status: '',
  sop_version: null,
})

// Initialize transparency data structure
NINE_PRINCIPLES.forEach(p => {
  formData.transparency[p.no] = { checked: false, description: '' }
})

const onSubmit = () => {
  Modal.success({
    title: '申請已成功送出',
    content: '您的申請已提交至管理中心，我們將盡快進行審查。',
    okText: '確認'
  })
}
</script>
