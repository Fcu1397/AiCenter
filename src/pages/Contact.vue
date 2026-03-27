<template>
  <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 flex justify-center items-center">
    <a-card class="w-full max-w-lg shadow-lg border-t-4 border-t-blue-600 rounded-xl">
      <div class="text-center mb-8">
        <h1 class="text-3xl font-bold text-gray-900 mb-2">聯絡我們</h1>
        <p class="text-gray-500">若有任何 AI 計畫申請、審核或資安法規疑問，請與我們聯繫。</p>
      </div>

      <div class="space-y-6">
        <div class="flex items-center">
          <div class="bg-blue-100 p-3 rounded-full mr-4 text-blue-600 text-xl">
            <UserOutlined />
          </div>
          <div>
            <h3 class="text-sm font-medium text-gray-500">承辦人</h3>
            <p class="text-lg font-bold text-gray-900">{{ MOCK_CONTACT.name }} {{ MOCK_CONTACT.title }}</p>
          </div>
        </div>

        <div class="flex items-center">
          <div class="bg-green-100 p-3 rounded-full mr-4 text-green-600 text-xl">
            <PhoneOutlined />
          </div>
          <div>
            <h3 class="text-sm font-medium text-gray-500">聯絡電話</h3>
            <p class="text-lg font-bold text-gray-900">{{ MOCK_CONTACT.phone }}</p>
          </div>
        </div>

        <div class="flex items-center">
          <div class="bg-orange-100 p-3 rounded-full mr-4 text-orange-600 text-xl">
            <MailOutlined />
          </div>
          <div>
            <h3 class="text-sm font-medium text-gray-500">電子信箱</h3>
            <p class="text-lg font-bold text-blue-600 hover:underline">
              <a :href="`mailto:${MOCK_CONTACT.email}`">{{ MOCK_CONTACT.email }}</a>
            </p>
          </div>
        </div>

        <div class="flex items-center">
          <div class="bg-purple-100 p-3 rounded-full mr-4 text-purple-600 text-xl">
            <ClockCircleOutlined />
          </div>
          <div>
            <h3 class="text-sm font-medium text-gray-500">服務時間</h3>
            <p class="text-lg font-bold text-gray-900">{{ MOCK_CONTACT.hours }}</p>
          </div>
        </div>
      </div>
    </a-card>
  </div>
</template>

<script setup lang="ts">
import {
  UserOutlined,
  PhoneOutlined,
  MailOutlined,
  ClockCircleOutlined
} from '@ant-design/icons-vue'
import { MOCK_CONTACT } from '@/mock/contact'
</script>
